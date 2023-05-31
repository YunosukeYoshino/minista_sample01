import { Head } from "minista"
import style from "../assets/styles/index.module.css"

export default function () {
  return (
    <>
      <Head>
        <title>Hello!</title>
        <script type="module" src="/src/assets/scripts/main.ts" />
      </Head>
      <h1 className={style.title}>Hello!</h1>
    </>
  )
}
