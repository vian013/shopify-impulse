import React from 'react'
import { QueryFunction, useQuery, UseQueryResult } from 'react-query'

type QueryProps = {
    queryId: string[],
    queryFn: QueryFunction,
    queryOption?: Object
}

function useWrappedQuery<ResultType>({queryId, queryFn, queryOption}: QueryProps) {
  const queryResult: UseQueryResult<ResultType, string> = useQuery(queryId, queryFn, queryOption)
  return queryResult
}

export default useWrappedQuery