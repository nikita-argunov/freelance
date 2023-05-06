import { useState } from 'react';
import './Registration.scss';
import TextField from '@mui/material/TextField';
import ProfileType from './ProfileType';
import { Props } from '.';

const Secondary = ({ formValues, onChange }: Props) => {
    return (
        <>
            <TextField onChange={onChange} value={formValues.name} name="name" label="имя" variant="filled" fullWidth />
            <TextField onChange={onChange} value={formValues.surname} name="surname" label="фамилия" variant="filled" fullWidth />
            <ProfileType formValues={formValues} onChange={onChange} />
        </>
    );
};

export default Secondary;