import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import style from './HomeView.scss'

export const HomeView = () => (
  <div>
    <h4>This is a duck, because Redux!</h4>
    <span>测试开发分支</span>
    <img className={style.duck} src={DuckImage} />
  </div>
)

export default HomeView
