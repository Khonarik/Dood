import React from "react"
import { FC } from "react"
import "./App.css"
import Layout from "../Layout"
import styles from "./gl.module.css"

const App: FC = () => {
  return (
    <Layout classname={styles.font}>
      <h1>Владик купил дуделку и теперь он - дудочник</h1>
    </Layout>
  )
}

export default App