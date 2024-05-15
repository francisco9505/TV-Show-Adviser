import s from "./style.module.css";

export const Logo = (props) => {
  return (
    <>
      <div className={s.container}>
        <img className={s.image} src={props.img} alt="logo" />
        <div className={s.tittle}>{props.tittle}</div>
      </div>
      <div className={s.subtittle}>{props.subtittle}</div>
    </>
  );
};
