import { useContext } from "react"
import { AppearanceContext } from "../../context"
import style from "./appearanceForm.module.scss"
import PropTypes from 'prop-types';
import CardsIcon from "../icons/CardsIcon"
import TableIcon from "../icons/TableIcon"

export function AppearanceForm({ name, onChangeHandler }) {

    const appearance = useContext(AppearanceContext)

    return (
        <form
            action="/"
            className={style.appearanceForm}
            onChange={(e) => {
                onChangeHandler(e.target.id)
                localStorage.setItem(name, e.target.id)
            }}>
            <label htmlFor="cardView" className={style.appearanceForm__label} >
                <CardsIcon height={32} width={32} />
                <input
                    className={style.appearanceForm__input}
                    type="radio"
                    name="appearance"
                    id="cardView"
                    defaultChecked={appearance === "cardView" ? true : false} />
            </label>
            <label htmlFor="tableView" className={style.appearanceForm__label} >
                <TableIcon height={32} width={32} />
                <input
                    className={style.appearanceForm__input}
                    type="radio"
                    name="appearance"
                    id="tableView"
                    defaultChecked={appearance === "tableView" ? true : false} />
            </label>
        </form>
    )
}

AppearanceForm.propTypes = {
    name: PropTypes.string,
    onChangeHandler: PropTypes.func,
}