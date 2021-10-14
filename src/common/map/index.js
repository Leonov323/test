/* eslint-disable camelcase */
import { Cards } from '../../components/main/cards'
import React from 'react'

export const CardList = () => {
  const keys = Object.keys(localStorage)

  const Data = () => {
    const res = []
    keys.forEach(element => {
      const items = localStorage.getItem(element)
      const parse = JSON.parse(items)
      res.push(parse)
    })
    return res
  }

  const list = Data()

  function storageAvailable (type) {
    let storage
    try {
      storage = window[type]
      const x = '__agwt_rt'
      storage.setItem(x, x)
      storage.removeItem(x)
      return true
    } catch (e) {
      return e instanceof DOMException && (
      // everything except Firefox
        e.code === 22 ||
                // Firefox
                e.code === 1014 ||
                // test name field too, because code might not be present
                // everything except Firefox
                e.name === 'QuotaExceededError' ||
                // Firefox
                e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
                // acknowledge QuotaExceededError only if there's something already stored
                (storage && storage.length !== 0)
    }
  }

  const Render = () => {
    if (storageAvailable('localStorage')) {
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
