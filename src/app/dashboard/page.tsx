import React from 'react';
import Header from '../components/header';
import { getTotals } from '@/utils/api';
import { HydrationBoundary, QueryClient, QueryClientProvider, dehydrate, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import getQueryClient from '@/utils/getQueryClient';

export interface DashboardPage {

}



export default async function Dashboard({}: DashboardPage) {
const queryClient = getQueryClient();

await queryClient.prefetchQuery({
  queryKey:['totals'],
  queryFn: () => getTotals({cache: 'no-cache'})
})

const dehydratedState = dehydrate(queryClient);
  
  return (
        <main>
          <HydrationBoundary state={dehydratedState}>
          <Header>Dashboard</Header>
          </HydrationBoundary>
        </main>
     )
}

