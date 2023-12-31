import { useGetListNationality } from '@/src/queries/member.queries';
import InputSelect from '@/src/shared/components/customization/form/InputSelect';
import InputText from '@/src/shared/components/customization/form/InputText';
import { Button } from '@/src/shared/components/ui/button';
import { Form } from '@/src/shared/components/ui/form';
import useTrans from '@/src/shared/hooks/useTrans';
import { Filter } from '@/src/shared/utils/typeSearchParams';
import { Search } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { IMemberSearch } from 'src/schemas/member.table.type';

type InputSelectProps = {
  fieldName: string;
  form: any;
  label?: string;
  placeHolder?: string;
  userId?: React.Key;
  data: { value: string; label: string }[];
  handleOnChange?: (value: any) => void;
};
const InputSelectCountry = (props: InputSelectProps) => {
  return (
    <InputSelect
      fieldName={props.fieldName || 'country'}
      form={props.form}
      label={props.label}
      placeHolder={props.placeHolder || 'Chọn quốc gia'}
      options={props.data}
      // handleOnChange={props.handleOnChange}
    />
  );
};

type Props = {
  searchDefault: {
    name: string;
    vjgr_code: string;
    nationality: string;
  };
  onChangeSearchArrayParams: any;
};

const SearchRank = ({ searchDefault, onChangeSearchArrayParams }: Props) => {
  const { trans } = useTrans();
  const { data: nationalities } = useGetListNationality();
  const defaultOption = [{ value: '', label: 'Tất cả' }];
  const transformedNationalitySearch = [
    ...defaultOption,
    ...(nationalities || []).map((nationality) => ({
      value: nationality,
      label: nationality,
    })),
  ];
  const form = useForm({
    defaultValues: searchDefault,
  });
  const onSubmit = async (data: IMemberSearch) => {
    try {
      const filters: Filter[] = [
        { field: 'name', value: data.name },
        { field: 'vjgr_code', value: data.vjgr_code },
        { field: 'nationality', value: data.nationality },
      ];
      onChangeSearchArrayParams(filters);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='max-w-[950px] absolute inset-x-0 mx-auto top-72 md:top-96 bg-[#fff] shadow-lg rounded-lg'>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          onError={e => {
            console.log(e);
          }}
          className='w-full flex-col-between-start mt-2 md:mt-5 p-2 md:p-5'
        >
          <div className='w-full grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-10 text-xs md:text-base'>
            <InputText
              className='col-span-2 md:col-span-1'
              placeHolder={trans.common.fillIn + ' ' + trans.common.member}
              fieldName='name'
              label={trans.common.member}
              form={form}
            ></InputText>
            <InputText
              placeHolder={trans.common.fillIn + ' ' + trans.common.codeVJGR}
              fieldName='vjgr_code'
              label={trans.common.codeVJGR}
              form={form}
            ></InputText>
            <InputSelectCountry
              data={transformedNationalitySearch || []}
              placeHolder={trans.common.all}
              fieldName='nationality'
              label={trans.common.nationality}
              form={form}
            ></InputSelectCountry>
          </div>
          <div className='block mt-4 ml-auto'>
            <Button className='bg-[var(--main-color)]' type='submit'>
              <Search className='mr-2 h-4 w-4' />
              {trans.common.search}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SearchRank;
