import { useState } from "react";
import Image from 'next/image';
import { motion } from "framer-motion";

interface Props {
    title: string;
    icon: string
}

const ContactInfoCard = ({title, icon}: Props) => {
    return (
        <motion.div
            className="flex rounded-xl p-3 overflow-hidden border-collapse"
            style={{ border: "1px solid #555" }}
        >
            <div className="flex items-center">
                <Image height={50} width={50} src={icon} alt={''}></Image>
                <p className="text-2xl px-3">{title}</p>
            </div>
        </motion.div>
    )
}

export default ContactInfoCard
  