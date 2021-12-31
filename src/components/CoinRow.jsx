import React from 'react'

const CoinRow = ({ coin, index }) => {
    return (
        <tr key={index}>
            <td>{index}</td>
            <td>
                <img src={coin.image} alt={coin.image} style={{ width: '5%' }} className="img-fluid me-4" />
                <span>
                    {coin.name}
                </span>
                <span className="text-muted ms-4 text-uppercase">
                    {coin.symbol}
                </span>
            </td>
            <td>{coin.current_price}</td>
            <td>{coin.price_change_percentage_24h}</td>
            <td>{coin.total_volume}</td>

        </tr>
    )
}

export default CoinRow
