import React from 'react'
import styles from './Paginator.module.sass'

const Paginator = (props) => {
    const pagesCount = Math.ceil(props.totalItemsCount/props.pageSize)

    const pages = []

    for(let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return  <div>
                {pages.map(page => {
                    return <span
                        className={props.currentPage === page ? styles.selectedPage : null}
                        onClick={() => {
                            props.onPageChanged(page)
                        }}
                    >{page}</span>
                })}
            </div>
}

export default Paginator