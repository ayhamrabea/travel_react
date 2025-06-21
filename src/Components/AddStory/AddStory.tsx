import { Link } from "react-router-dom"
import { Button } from "../Button/Button"
import { FormField } from "../FormField/FormField"
import { InputFile } from "../CustomInputFile/CustomInputFile"
import { Form } from "../Form/Form"
import Icon from "../Icon/Icon"


export const AddStory = () => {

    // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const files = e.target.files;
    //     if (files && files.length > 0) {
    //     console.log("تم اختيار الملفات:", files);
    //     }
    // };

    const test = () => {
        console.log('test')
    }

    return (
        <section>
            <div className="container">
                <div className="story">
                    <Form onSubmit={test} title="Добавление истории о путешествии">

                        <fieldset>
                            <legend>Медиа</legend>
                            <InputFile />
                        </fieldset>

                        <fieldset>
                            <legend>Основная информация</legend>
                            <FormField labelName="Заголовок">
                            <input type="text" name="title" placeholder="Заголовок"/>
                            </FormField>

                            <div className="form-col-2">
                            <FormField labelName="Страна">
                                <input type="text" name="country" placeholder="Страна"/>
                            </FormField>

                            <FormField labelName="Город">
                                <input type="text" name="city" placeholder="Город"/>
                            </FormField>
                            </div>

                            <FormField labelName="Описание">
                            <textarea name="description" placeholder="Добавьте описание вашей истории "/>
                            </FormField>
                        </fieldset>

                        <div className="form-action">
                            <Link className="my-btn my-btn--link" to={'/'}> <Icon className="form-back" name="back"></Icon> Назад</Link>
                            <Button className="my-btn" type="submit">Сохранить</Button>
                        </div>
                    </Form>
                </div>
            </div>
            
        </section>
    )
}