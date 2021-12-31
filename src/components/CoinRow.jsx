import React from 'react'

const CoinRow = ({ coin, index }) => {
    return (
        <tr key={index}>
            <td>{index}</td>
            <td>
                <img src={coin.image} alt={coin.image} className="img-fluid me-4 img-crypto" />
                <span>
                    {coin.name}
                </span>
                <span className="text-muted ms-4 text-uppercase">
                    {coin.symbol}
                </span>
            </td>
            <td>{coin.current_price}</td>
            <td className={coin.price_change_percentage_24h > 0 ? 'text-success' : 'text-danger'}>

                {coin.price_change_percentage_24h}

            </td>
            <td>{coin.total_volume}</td>

        </tr>
    )
}

export default CoinRow
