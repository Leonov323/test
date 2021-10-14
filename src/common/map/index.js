import { Cards } from '../../components/main/cards'



export const CardList = () => {

    const keys = Object.keys(localStorage)

    const Data = () => {
        const res = []
        keys.forEach(element => {
            const items = localStorage.getItem(element)
            const parse = JSON.parse(items)
            res.push(parse)
        });
        return res
    }

    const list = Data()

    const Render = () => {

        if (list.length > 0) {
            return <>
                {list.map(({
                    name,
                    temperature,
                    feels_like,
                    weatherImg,
                    description
                }, index) => {
                    return <Cards
                        name={name}
                        temperature={temperature}
                        feels_like={feels_like}
                        weatherImg={weatherImg}
                        description={description}
                        delete={name}
                        key={index} />
                })}
            </>
        } else {
            return <p className="text-center mt-5">No saved cards</p>
        }
    }

    return Render()

}

