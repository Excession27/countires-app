import { Link } from "react-router-dom";

const Btn = (props: { link: String; text: String }) => {
  return (
    <button className="shadow shadow-slate-500 hover:shadow-indigo-500/40 py-2 px-5 dark:bg-slate-600">
      <Link to={`${props.link}`}>{props.text}</Link>
    </button>
  );
};

export default Btn;
