import AppBar from "../AppBar/AppBar";

export default function Layout({children}) {
  return (
    <div className={css.container}>
        <AppBar />
        {children}
    </div>
  )
}
