import { Link } from "react-router-dom";

const Btn = (props: { link: String; text: String }) => {
  return (
    <Link
      className="my-6 inline-block py-2 px-5 shadow shadow-slate-500 hover:shadow-indigo-500/40 dark:bg-slate-600"
      to={`${props.link}`}
    >
      {props.text}
    </Link>
  );
};

export default Btn;
