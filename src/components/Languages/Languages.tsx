import style from "./component.module.css";

interface Props {
  languages: Languages;
}
export const Languages = ({ languages }: Props) => {
  const ballsNumber = 6;
  return (
    <ul className={style.ul}>
      {languages.map(({ name, level, customDesc }, i) => (
        <li className={style.li} key={i}>
          <div>
            <p className={style.name}>{name}</p>
            <p className={style.desc}>
              {customDesc ? customDesc : CEFRDesc[level]} - {CEFR[level]}
            </p>
          </div>
          <div className={style.balls}>
            {[...Array(ballsNumber)].map((e, i) => (
              <div
                key={i}
                className={`${style.ball} ${
                  i + 1 <= level ? style.full : style.empty
                }`}
              />
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
};

interface Language {
  name: string;
  level: number;
  customDesc?: string;
}

enum CEFR {
  "A1" = 1,
  "A2" = 2,
  "B1" = 3,
  "B2" = 4,
  "C1" = 5,
  "C2" = 6 | 7,
}

enum CEFRDesc {
  "Beginner" = 1,
  "Elementary" = 2,
  "Intermediate" = 3,
  "Upper Intermediate" = 4,
  "Advanced" = 5,
  "Proficiency" = 6,
  "Native" = 7,
}

export interface Languages extends Array<Language> {}
