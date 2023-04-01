
import React, { useContext, useEffect } from 'react';

import HomeContext from '../context/home';
import { usePageCount } from '../graphql/hooks';
import { client as apolloClient, PEOPLE_QUERY } from '../graphql/queries';

import PaginationCss from '../styles/Pagination.module.css';

function SearchBar() {
    const ctx = useContext(HomeContext);
    const { pages } = usePageCount();

    useEffect(() => {
        ctx.homeDispatch({
            type: 'SET_PAGES',
            payload: {
                pages,
            }
        })
    }, [pages])

    const onDotChange = async (dotIndex: number) => {
        const fetchingEvent = 'CHARACTER_FETCHING'
        ctx.homeDispatch({ type: 'IS_FETCHING', payload: { fetchingEvent }})
        const page = dotIndex + 1;
        const { data: { characters } } = await apolloClient.query({
            query: PEOPLE_QUERY,
            variables: { page },
        });
        ctx.homeDispatch({ type: 'CHANGE_PAGE', payload: { dotIndex, characters, fetchingEvent } })
    }

    return (
        <div className={PaginationCss.dotContainer}>
            {
            ctx.homeStatus.pageArray.map((page: number, idx: number) => {
                return (
                <div
                    key={idx}
                    className={`${PaginationCss.dot} ${ctx.homeStatus.dotIndex === idx ? PaginationCss.target : ''}`}
                    onClick={() => onDotChange(idx)}
                >
                    {page.toString()}
                </div>
                )
            })
            }
        </div>
    )
}

export default SearchBar
