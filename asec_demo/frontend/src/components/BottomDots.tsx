
import React, { useContext } from 'react';

import HomeContext from '../context/home';
import PaginationCss from '../styles/Pagination.module.css';

function SearchBar() {
    const ctx = useContext(HomeContext);
    const pageDotArray = Array.from({length: ctx.pages}, (_, index) => index + 1);
    let pageNumber = ctx.page;

    const changePage = (idx: number) => {
        if (pageNumber === idx + 1) return
        pageNumber = idx + 1;
        ctx.changeDotIdx(idx)
    }

    return (
        <div className={PaginationCss.dotContainer}>
            {
            pageDotArray.map((page: number, idx) => {
                return (
                <div
                    key={idx}
                    className={`${PaginationCss.dot} ${ctx.targetDotIdx === idx ? PaginationCss.target : ''}`}
                    onClick={() => changePage(idx)}
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
