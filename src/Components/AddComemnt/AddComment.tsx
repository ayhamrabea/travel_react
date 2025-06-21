import { Link } from "react-router-dom"
import { Button } from "../Button/Button"
import { FormField } from "../FormField/FormField"
import { Form } from "../Form/Form"
import Icon from "../Icon/Icon"


export const AddComment = () => {


    const test = () => {
        console.log('test')
    }

    return (
        <section>
            <div className="container">
                <div className="story">
                    <Form onSubmit={test} title="Добавление отзыва">

                        <FormField labelName="Заголовок">
                            <input type="text" name="title" placeholder="Заголовок"/>
                        </FormField>
                        

                        <FormField labelName="Описание">
                            <textarea  name="description" placeholder="Добавьте описание вашей истории "/>
                        </FormField>

                        <div className="form-action">
                            <Link className="my-btn btn--link" to={'/'}>
                                <Icon className="form-back" name="back"></Icon>
                                Назад
                            </Link>
                            <Button className="my-btn" type="submit">Сохранить</Button>
                        </div>
                    </Form>
                </div>
            </div>
            
        </section>
    )
}