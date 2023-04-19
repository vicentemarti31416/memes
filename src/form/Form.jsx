import { useForm } from "react-hook-form";
import { useContext } from "react";
import { HomeContext } from "../shared/HomeContext";

export default function Form() {

    const { register } = useForm();
    const { estilos, setEstilos } = useContext(HomeContext);

    const handleInputChange = (event) => {
        console.log(event.target)
        const { name, value } = event.target;
        setEstilos({ ...estilos, [name]: value });
    };

    return (
        <div className="form__container">
            <form className="form">
                <div>
                    <label htmlFor="topText">topText</label>
                    <input
                        onInput={handleInputChange}
                        name="topText"
                        type="text"
                        {...register("topText")}
                        defaultValue={estilos.topText}
                    />
                </div>
                <div>
                    <label htmlFor="topText">topX</label>
                    <input
                        onInput={handleInputChange}
                        name="topX"
                        type="text"
                        {...register("topX")}
                        defaultValue={estilos.topX}
                    />
                </div>
                <div>
                    <label htmlFor="topY">topY</label>
                    <input
                        onInput={handleInputChange}
                        name="topY"
                        type="text"
                        {...register("topY")}
                        defaultValue={estilos.topY}
                    />
                </div>
                <div>
                    <label htmlFor="bottomText">bottomText</label>
                    <input
                        onInput={handleInputChange}
                        name="bottomText"
                        type="text"
                        {...register("bottomText")}
                        defaultValue={estilos.bottomText}
                    />
                </div>
                <div>
                    <label htmlFor="bottomX">bottomX</label>
                    <input
                        onInput={handleInputChange}
                        name="bottomX"
                        type="text"
                        {...register("bottomX", { required: true })}
                        defaultValue={estilos.bottomX}
                    />
                </div>
                <div>
                    <label htmlFor="bottomY">bottomY</label>
                    <input
                        onInput={handleInputChange}
                        name="bottomY"
                        type="text"
                        {...register("bottomY", { required: true })}
                        defaultValue={estilos.bottomY}
                    />
                </div>
            </form>
        </div>
    );
}
