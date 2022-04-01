import React, {FC} from "react";


import './loading.scss'
// @ts-ignore
import Loader from '../../assets/svg/loading.svg';

type LoadingProps = {}


const Index: FC<LoadingProps> = ({}: LoadingProps) => {

    return (
        <img className={'loading'} src={Loader} alt={'loading'}/>
    );
}

export default Index;