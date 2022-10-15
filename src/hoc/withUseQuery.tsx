import React from 'react'
import {QueryFunction, useQuery, UseQueryResult} from "react-query"
import useWrappedQuery from './useWrappedQuery'

type QueryProps = {
    queryId: string[],
    queryFn: QueryFunction,
    queryOption?: Object
}

export type CombinedProps<ResultType, Props> = {
    queryResult: UseQueryResult<ResultType, string>
} & Props

function withUseQuery<ResultType, Props>({queryId, queryFn, queryOption}: QueryProps) {
    return function(WrappedComponent: React.ComponentType<CombinedProps<ResultType, Props>>) {
        const WithUseQuery = (props: Props) => {
            const queryResult = useWrappedQuery<ResultType>({queryId, queryFn, queryOption})
    
            const allProps = {...props, queryResult}
            return (
                <WrappedComponent {...allProps}/>
            )
        } 
    
      return WithUseQuery
    }
}

export default withUseQuery