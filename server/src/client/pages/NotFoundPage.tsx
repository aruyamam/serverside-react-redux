import React from 'react';
import { Context } from '../actions/types';

interface Props {
   staticContext: Context;
}

const NotFoundPage = ({ staticContext = {} }: Props) => {
   staticContext.notFound = true;

   return <h1>Ooops, route not found.</h1>;
};

export default {
   component: NotFoundPage,
};
