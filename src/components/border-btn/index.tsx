import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { getCountriesByCode } from "../../api/country";

type BorderBtnType = {
  code: string;
};

const BorderBtn = (props: BorderBtnType) => {
  const { code } = props;
  const Country = useQuery<any>([`border-country${code}`, code], async () => {
    let response = await getCountriesByCode(code);

    return response.data;
  });

  return (
    <>
      {Country.isSuccess && (
        <Link
          className="py-2 px-5 shadow shadow-slate-500 hover:shadow-indigo-500/40 dark:bg-slate-600"
          to={`/code/${Country.data[0].ccn3}`}
        >
          {Country.data[0].name?.common}
        </Link>
      )}
    </>
  );
};

export default BorderBtn;
