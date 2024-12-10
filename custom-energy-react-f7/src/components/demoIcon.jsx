import React from 'react';
import {
  Icon,
} from 'konsta/react';
import {
  PersonCircleFill
} from 'framework7-icons/react';
import { MdPerson } from 'react-icons/md';

export default function DemoIcon() {
    return (
        <Icon
        ios={<PersonCircleFill className="w-7 h-7" />}
        material={<MdPerson className="w-6 h-6" />}
      />
    );
  }