import { TJurnal } from "../../types/jurnal-type"

type TCardJurnalProps = {
    props: TJurnal
    onclick: (id: number) => void
}

export const CardJurnal = ({props, onclick}: TCardJurnalProps) => {
    return (
        <div className="flex flex-col gap-y-2 cursor-pointer" key={props.id} onClick={() => onclick(props.id)}>
            <h3 className="text-bold text-gray-900 text-xl">{props.title}</h3>
            <div className="flex gap-x-2 flex-row text-gray-500 text-sm">
                <h6>{props.pengarang}</h6>
                <span> | </span>
                <h6>{props.tahun_terbit}</h6>
            </div>

            <p className="text-md text-gray-600">{props.abstrak.substring(0,560)+"..."}</p>

            <div className="flex flex-row gap-x-2">
                <h6 className="bg-unisbank-400  px-1 text-white">Kemiripan {props.cosine_similarity}</h6>
                <span>|</span>
                <span>{props.kd_jurnal}</span>
            </div>
        </div>
    )
}