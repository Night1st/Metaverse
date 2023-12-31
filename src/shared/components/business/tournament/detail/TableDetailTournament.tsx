import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import CountryFlag from '@/src/shared/components/customization/CountryFlag';
import DataTableColumnHeader from '@/src/shared/components/customization/table/DataTableColumnHeader';
import DataTable from '@/src/shared/components/customization/table/DataTable';
import { ITournamentDetail } from 'src/schemas/tournament-detail.table.type';
import useTrans from '@/src/shared/hooks/useTrans';
import { URL_SYSTEMS } from '@/src/shared/constants';
import { useRouter } from 'next/router';

type Props = {
  tournamentDetail: ITournamentDetail[];
  tableConfig: any;
};

const CustomizeCell = ({
  id,
  collapseStates,
  title,
  value,
  desc,
}: {
  id: number | string;
  collapseStates: Record<string, boolean>;
  title: string;
  value: string | number | null;
  desc: string;
}) => {
  const containerVariants = {
    hidden: { opacity: 0, y: -5 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      key={id}
      className='w-[200px] mt-4 flex-col-start p-4 rounded-lg border-[var(--main-color)] border-2'
      initial='hidden'
      animate={'visible'}
      variants={collapseStates[id] ? containerVariants : {}}
    >
      <h2 className='font-bold'>{title}</h2>
      <div className='flex-row-end'>
        <motion.p className='text-lg md:text-xl lg:text-2xl' variants={collapseStates[id] ? containerVariants : {}}>
          {value}
        </motion.p>
        <motion.p className='text-xs ml-1' variants={collapseStates[id] ? containerVariants : {}}>
          {desc}
        </motion.p>
      </div>
    </motion.div>
  );
};

export function TableDetailTournament({ tournamentDetail, tableConfig }: Props) {
  const {trans} = useTrans()
  const router = useRouter();
  const [collapseStates, setCollapseStates] = useState<Record<string, boolean>>({});
  const TABLE_NAME = 'Detail Tournament';
  const uniqueValues = new Set();
  const filteredData = tournamentDetail.filter(item => {
    if (!uniqueValues.has(item.member_id)) {
      uniqueValues.add(item.member_id);
      return true;
    }
    return false;
  });
  const calculateRoundColumn = () => {
    const columnDefs: ColumnDef<ITournamentDetail>[] = [];
    if(tournamentDetail.length <= 0) return columnDefs
    for (let i = 1; i <= tournamentDetail[0].tournament.number_round; i++) {
      columnDefs.push({
        id: `round-${i}`,
        accessorKey: `round-${i}`,
        cell(props) {
          const scoreByRound = tournamentDetail
            .filter(item => item.member_id === props.cell.row.original.member_id && item.round_number === i)
            .map(item => item.score);
          return (
            <React.Fragment>
              <p className='mr-2 text-center'>{scoreByRound}</p>
              {collapseStates[props.cell.row.id] && i === 1 && (
                <CustomizeCell
                  id={props.cell.row.id}
                  collapseStates={collapseStates}
                  title={trans.common.join}
                  value={props.cell.row.original.member.counting_tournament}
                  desc={trans.common.tournament}
                />
              )}
              {collapseStates[props.cell.row.id] && i === 2 && (
                <CustomizeCell
                  id={props.cell.row.id}
                  collapseStates={collapseStates}
                  title={trans.rank.champion}
                  value={props.cell.row.original.member.number_of_wins}
                  desc={trans.common.bout}
                />
              )}
            </React.Fragment>
          );
        },
        header: ({ column }) => <DataTableColumnHeader column={column} title={`${trans.tournament.round} ${i}`} />,
      });
    }
    return columnDefs;
  };
  const roundColumns = calculateRoundColumn();
  const columnNews: ColumnDef<ITournamentDetail>[] = [
    {
      id: 'member_best_rank',
      accessorKey: 'member_best_rank',
      cell(props) {
        return (
          <React.Fragment>
            <div className='min-w-[50px] h-[20px] flex-row-center gap-2'>
              {collapseStates[props.cell.row.id] ? <ChevronDown /> : <ChevronUp />}
              <p className='text-center'>
                {props.cell.row.original.tournament_summary.finish ? props.cell.row.original.tournament_summary.finish : trans.table.nothing}
              </p>
            </div>
            {collapseStates[props.cell.row.id] && (
              <CustomizeCell
                id={props.cell.row.id}
                collapseStates={collapseStates}
                title={trans.rank.currentRating}
                value={props.cell.row.original.tournament_summary.finish ? props.cell.row.original.tournament_summary.finish : 0}
                desc=''
              />
            )}
          </React.Fragment>
        );
      },
      header: ({ column }) => <DataTableColumnHeader column={column} title={trans.common.rating} />,
    },
    {
      id: 'member_name',
      accessorKey: 'member_name',
      cell(props) {
        return (
          <React.Fragment>
            <div className='relative min-w-[150px] grid grid-cols-3 justify-center items-center'>
              <CountryFlag countryCode={props.cell.row.original.member.nationality} />
              <p className='text-left col-span-2'>{props.cell.row.original.member.name}</p>
              {props.cell.row.original.member && (
                <p
                  className='absolute left-1/2 -translate-x-[40%] top-1/2 translate-y-3/4 text-[12px] flex-row-center gap-1 rounded-lg opacity-70 hover:opacity-100 cursor-pointer'
                  onClick={() => router.push(`${URL_SYSTEMS.RANK}/${props.cell.row.original.member.id}`)}
                >
                  {trans.common.seeMore}
                  <ArrowRight size={12} />
                </p>
              )}
            </div>
            {collapseStates[props.cell.row.id] && (
              <CustomizeCell
                id={props.cell.row.id}
                collapseStates={collapseStates}
                title={trans.rank.highestRating}
                value={props.cell.row.original.member.best_rank ? props.cell.row.original.member.best_rank : 0}
                desc=''
              />
            )}
          </React.Fragment>
        );
      },
      header: ({ column }) => <DataTableColumnHeader column={column} title={trans.common.member} />,
    },
    ...roundColumns,
    {
      id: 'to_par',
      accessorKey: 'to_par',
      cell(props) {
        return <p className='mr-2 text-center'>{props.cell.row.original.tournament_summary.to_par}</p>;
      },
      header: ({ column }) => <DataTableColumnHeader column={column} title='To par' />,
    },
    {
      id: 'point',
      accessorKey: 'point',
      cell(props) {
        return <p className='mr-2 text-center'>{props.cell.row.original.tournament_summary.point}</p>;
      },
      header: ({ column }) => <DataTableColumnHeader column={column} title={trans.common.rewardPoint} />,
    },
  ];

  return (
    <section id='TableDetailTournament' className='w-full mt-4 space-y-4'>
      <DataTable
        business="table-detail-tournament"
        setCollapseStates={setCollapseStates}
        data={filteredData}
        columns={columnNews}
        tableName={TABLE_NAME}
        {...tableConfig}
      />
    </section>
  );
}
export default TableDetailTournament;
