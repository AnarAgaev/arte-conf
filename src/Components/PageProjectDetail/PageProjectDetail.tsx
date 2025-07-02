import { formatRussianNumber } from '@helpers'
import { StepFragmentsWrapper, StepFragmentItem,
	RoomDetail, SideSketchLine, SideSketchLShaped,
	SideSketchRectangle, SideSketchSnake,
	SideSketchUShaped } from "@components"
import style from './PageProjectDetail.module.sass'

const {
	PageProjectDetail__caption,
	PageProjectDetail__rooms,
	PageProjectDetail__total,
} = style

export const PageProjectDetail = () => {
    return (
        <StepFragmentsWrapper>
			<StepFragmentItem>
				<div className={PageProjectDetail__caption}>
					<h2>
						Название проекта:
						<span>Апартаменты на Пушкинской</span>
					</h2>
					<div>
						<button className="btn btn_middle btn_lite" type="button">
							<i className="download"></i>
							приложить свои документы
						</button>
						<button className="btn btn_middle btn_lite" type="button">
							<i className="remove"></i>
							удалить все
						</button>
					</div>
				</div>
			</StepFragmentItem>

			<StepFragmentItem>
				<div className={PageProjectDetail__rooms}>
					{ [1, 2, 3, 4, 5, 6].map(i =>
						<RoomDetail key={i}>

							{ i === 1 &&
								<SideSketchLShaped
									side1={formatRussianNumber(15687) + " мм"}
									side2={formatRussianNumber(4687) + " мм"}
								/>
							}

							{ i === 2 &&
								<SideSketchRectangle
									side1={formatRussianNumber(15687) + " мм"}
									side2={formatRussianNumber(4687) + " мм"}
									side3={formatRussianNumber(15687) + " мм"}
									side4={formatRussianNumber(4687) + " мм"}
								/>
							}

							{ i === 3 &&
								<SideSketchLine
									side1={formatRussianNumber(15687) + " мм"}
								/>
							}

							{ i === 4 &&
								<SideSketchUShaped
									side1={formatRussianNumber(15687) + " мм"}
									side2={formatRussianNumber(4687) + " мм"}
									side3={formatRussianNumber(15687) + " мм"}
								/>
							}

							{ i === 5 &&
								<SideSketchSnake
									side1={formatRussianNumber(15687) + " мм"}
									side2={formatRussianNumber(90009) + " мм"}
									side3={formatRussianNumber(15687) + " мм"}
								/>
							}

							{ i === 6 &&
								<SideSketchRectangle
									side1={formatRussianNumber(15687) + " мм"}
									side2={formatRussianNumber(4687) + " мм"}
									side3={formatRussianNumber(15687) + " мм"}
									side4={formatRussianNumber(4687) + " мм"}
								/>
							}

						</RoomDetail>
					)}
				</div>
			</StepFragmentItem>

			<StepFragmentItem>
				<div className={PageProjectDetail__total}>
					<h2>
						Итого:
						<span>2 450 000 ₽</span>
					</h2>
					<button className="btn btn_large btn_dark" type="button">
						Отправить заявку
					</button>
				</div>
			</StepFragmentItem>
		</StepFragmentsWrapper>
    )
}