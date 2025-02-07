import style from './Wallet.module.sass'

const { wallet, caption, body, price, total, calc, value, controller, controller_dec, controller_inc } = style

export const Wallet = () => {


    console.log('---render Wallet');



    return (
        <div className={wallet}>
            <h3 className={caption}>Стоимость полного комплекта:</h3>

            <div className={body}>
                <span className={price}>450 000 ₽</span>

                <div className={calc}>
                    <button type="button" onClick={() => {}}
                        className={`${controller} ${controller_dec}`}></button>

                    <input readOnly type="text" className={value} value={5} />

                    <button type="button" onClick={() => {}}
                        className={`${controller} ${controller_inc}`}></button>
                </div>

                <span className={total}>2 450 000 ₽</span>
            </div>
        </div>
    )
}