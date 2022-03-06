import React, { useEffect, useState } from "react";
import styles from "./ment.module.css";

const Ment = (props) => {
  const [types, setTypes] = useState("");
  const [userType, setUserType] = useState("");
  const [word, setWord] = useState("");

  const type = {
    RI: `R-I유형은 미래를 생각하기 보다는 현재에 집중하는 편입니다. 기존의
      규칙이나 틀을 고쳐서 더 좋게 만들고 그 과정에서 생기는 문제를 해결하는
      것을 좋아합니다. R-I유형의 학생들은 교실 수업 보다는 현장학습을 통해서
      배우는 것을 더 좋아합니다. R-I유형은 기술자 등의 직업에 어울립니다.`,

    RA: `R-A유형은 새로운 것을 만들어내는데 기술적인 능력을 사용하거나 자신만의
    아이디어를 활용하는 것을 좋아합니다. 이 유형은 조직의 질서나 규칙을
    따르는 것을 불편해 하는 경우가 있습니다. R-A유형은 촬영기사, 조경 기술자
    등의 직업에 어울립니다.`,

    RS: `R-S유형은 신체를 사용하거나 바깥에서 하는 활동을 통해 다른 사람들을 돕는
      것을 좋아합니다. 이 유형은 자신의 이미지를 좋게 보이는 데에 신체적인
      힘이 중요하다고 생각합니다. R-S유형은 운동코치나 감독, 응급 구조사 등의
      직업에 어울립니다.`,

    RE: `R-E유형은 작은 조직일지라도 대표를 맡는 것을 좋아합니다. 이 유형은 종종
      혼자서 일하는 것을 좋아합니다. R-E유형은 높은 수준의 연습을 필요로 하는
      전문 직업이나 자신이 직접 운영하는 사업 등을 좋아하고, 선장이나 비행기
      조종사 등의 직업에 어울립니다`,

    RC: `R-C유형은 도구나 기계를 사용하는 것을 좋아합니다. 규칙적인 활동을
      선호하며 짜임새 있는 스케줄을 세우려고 합니다. 이 유형은 구체적으로
      결과가 나타나는 활동에 참여하는 것을 좋아합니다. R-C유형은 직업군인,
      정비원 등의 직업에 어울립니다`,

    IR: ` I-R유형은 실생활과 밀접한 분야를 연구하거나 새로운 물건을 만들어내는
      것을 좋아합니다. 자신만의 방식으로 문제를 해결하려고 하며 관심 주제가
      같은 사람들과 교류를 통해 배우고자 합니다. I-R유형은 의료나 공학분야의
      연구활동을 좋아하며, 의사나 생명과학연구원 등의 직업에 어울립니다`,

    IA: `I-A유형은 아이디어를 생각하고 새로운 이론을 만드는 것을 좋아합니다. 이
      유형은 문제 해결을 위해 원리나 이론을 우선적으로 적용해서 답을 찾아내는
      편입니다. I-A유형은 교수 등의 직업에 어울립니다`,

    IS: `I-S유형은 사람들과 관련된 일을 연구하는 것을 좋아합니다. 이 유형은
      그러한 일을 할 때 이론을 분석하거나 적용해보는 것을 좋아합니다. 이들은
      다소 차가워 보일 수 있으며 일 중심적인 편입니다. I-S유형은 사람,
      조직이나 단체를 진단하거나 분석하는 일을 좋아합니다.`,

    IE: ` I-E유형은 대규모의 사업보다는 전문성을 바탕으로 한 일을 좋아합니다. 이
      유형은 소규모일지라도 비슷한 수준의 전문지식을 가진 사람들과 함께 일하는
      것을 좋아합니다. 첨단기술을 필요로 하는 사업이나, 새로운 분야의 사업을
      좋아합니다`,

    IC: ` I-C유형은 인내를 필요로 하는 장기적인 문제나 이론을 다루는 일을
      좋아합니다. 이들은 집중력이 뛰어나고 제시간에 과제를 마치기 위해
      노력합니다. I-C유형은 현실적인 감각이 있기 때문에 여론조사 전문가,
      사회과학연구원 등의 직업에 어울립니다.`,

    AR: `A-R유형은 눈에 보이는 사물을 대상으로 창조적인 활동을 하는 것을
      좋아합니다. 이들은 다른 사람과 같이 활동하기 보다는 혼자 하는 것을
      좋아합니다. A-R유형은 상품을 전시하거나 실내를 꾸미는 등의 활동을 하는
      것을 좋아합니다`,

    AI: `A-I유형은 최신 유행에 민감하고 다른 사람들의 변화를 이끌어내기도 합니다.
      이들은 음악, 미술, 언어 등을 활용하여 창조적인 활동을 하는 것을
      좋아합니다. A-I유형은 직관적이고 통찰력이 있는 편입니다. A-I유형은 작가,
      작곡가 등의 직업에 어울립니다.`,

    AS: `A-S유형은 예술적인 감각을 가지고 다른 사람들을 돕거나 즐겁게 해주는 것을
      좋아합니다. 이 유형은 소극적으로 보일 수 있으나 자신이 중요하게 생각하는
      부분에서는 강하게 주장합니다.`,

    AE: `A-E유형은 표현을 잘하고 독립적으로 행동하며 자신들의 예술활동에 최소한의
      제한을 받으며 활동하고자 합니다. 이들은 자유롭게 움직이는 경향이 있고
      자신들이 만족할 수 있는 활동을 선택합니다. A-E유형은 영화감독,
      방송연출가 등의 직업에 어울립니다`,

    AC: `A-C유형은 창조적인 활동을 계획적으로 해나가는 것을 좋아합니다. 이들이
      이끌어가는 활동은 반드시 끝을 보는 편입니다. A-C유형이 만드는 것은
      모호하지 않고 현실과 직접 관련되어 있는 것들이 많습니다. A-C유형은
      도시계획가 등의 직업에 어울립니다.`,

    SR: `S-R유형은 몸을 움직여서 하는 활동을 좋아하며 다른 사람들을 돕는 것을
      좋아합니다. 캠프나 휴양지에서의 활동, 이벤트 참여, 스카우트 등의
      봉사활동에 매력을 느낍니다. S-R유형은 자신들의 활동을 통해 집단을 이끄는
      역할을 수행하길 선호합니다.`,

    SI: `S-I유형은 문제를 해결하는데 일 중심적이기 보다는 사람 중심적인 경향이
      있습니다. 이들은 소수의 친구들과 함께 긴밀한 관계를 가지고 활동하는 것을
      좋아합니다. S-I유형은 새로운 이론을 만들어내기 보다는 그 이론들이 얼마나
      효과가 있는지를 알아보는데 관심이 있습니다. S-I유형은 상담전문가나
      성직자 등의 직업에 어울립니다`,

    SA: `S-A유형은 자신의 주장을 지지해 줄 친구들과 함께 집단을 만들어 사회적인
      영향을 미칠 수 있습니다. 이들은 말하는데 능숙하며 자신의 주장에 대해
      고집스러울 수 있습니다. S-A유형은 시민단체 활동가 등의 직업에 어울립니다`,

    SE: `S-E유형은 공공의 이익을 추구하는 단체에서 일하는 것을 좋아하고 사람들을
      관리, 감독하는 일보다 도와주는 것을 좋아합니다. 경쟁적인 상황을 싫어하고
      사회를 위해 돈을 어떻게 사용할 수 있는가에 관심이 많습니다.`,

    SC: `S-C유형은 활동을 할 때 절차보다는 친구와의 관계에 관심이 많습니다.
      친구들과 함께 활동할 때 예외를 인정하고, 따돌림을 당하는 친구들을
      보살피고 지지해 줍니다. S-C유형은 인권 보호 활동이나 갈등을 조정하는
      역할을 선호합니다.`,

    ER: `E-R유형은 조직이나 단체에서 관리하는 역할을 좋아합니다. 솔직하고
      직접적인 표현을 잘 하기 때문에 이끄는 능력이 뛰어나다는 평가를 받습니다.
      이들은 커다란 규모의 조직에서 리더 역할을 하는 것을 선호합니다.`,

    EI: `E-I유형은 모험을 좋아하고 위험한 일에 도전하는 것을 좋아합니다. 이
      유형은 연구나 분석 활동을 통해 눈에 보이는 경쟁에 참여하길 원합니다.
      E-I유형은 경영컨설턴트 등의 직업에 어울립니다.`,

    EA: ` E-A유형은 뚜렷한 목적을 세우고 창조적인 활동을 하는 것을 선호합니다.
      이러한 활동에 필요한 비용을 계산하거나 마감시간이 정해져 있는 활동을 잘
      해낼 수 있습니다. 이 유형은 어려운 활동에 도전하는 경향이 있습니다.
      E-A유형은 상품기획 전문가나 광고홍보 전문가와 같은 직업에 어울립니다.`,

    ES: `E-S유형은 경쟁상황을 좋아하고 이익을 낼 수 있는 단체에서 활동하는 것을
      좋아합니다. 자신에게 맡겨진 권한을 바탕으로 조직에서 책임을 지고 조직을
      대표하여 하는 활동을 좋아합니다. E-S유형은 여행상품 개발자, 해외 영업원
      등의 직업에 어울립니다.`,

    EC: `E-C유형은 조직이나 단체의 리더가 되는 것을 좋아합니다. 이 유형은
      의사결정을 확실하게 내리며 권한을 필요로 하는 활동을 좋아합니다. 종종
      경쟁적이며 자신의 성취에 만족하지 않고 새로운 목표를 만들어냅니다.
      E-C유형은 바이어 등의 직업에 어울립니다.`,
    CR: `C-R유형은 자신에게 맡겨진 일을 독립적으로 하기를 좋아합니다. 이 유형은
      높은 책임감을 바탕으로 활동을 수행합니다. C-R유형은 약사, 법무사 등의
      직업에 어울립니다.`,

    CI: ` C-I유형은 스케줄과 절차가 분명하게 제시되어 있는 활동을 좋아합니다. 이
      유형은 활동을 할 때 집중력이 높으며, 한 번에 하나의 활동만 하기를
      원합니다. 이들은 현실적으로 결과가 나타나는 조사활동이나 분석활동 등을
      좋아하며, 세무사 등의 직업에 어울립니다.`,

    CA: ` C-A유형은 모험을 좋아하지 않지만 다른 사람들이 하는 모험을 좋아합니다.
      이들은 순수예술가를 지원하는 일이나 그들에게 질서를 주는 활동을
      좋아합니다. C-A유형은 미술 관리자, 박물관장과 같은 일을 선호합니다.`,

    CS: `C-S유형은 정해진 상황에서 안정성을 추구하고 다른 사람들과 함께 하는
      활동을 좋아합니다. 규칙을 따르는 것을 중요하게 생각하고 예외를 싫어하며,
      시간을 엄격하게 지키는 성향을 갖고 있습니다. C-S유형은 공무원,
      전문비서와 같은 직업에 어울립니다.`,

    CE: ` C-E유형은 사람들을 지지하고 지원하는 활동을 좋아합니다. 이 유형은
      조직이나 단체에서 2인자로 활동하거나 리더를 도와 조직을 운영하는 일을
      좋아합니다. C-E유형은 금융자산 운용가, 정부정책 기획전문가 등의 직업에
      어울립니다.`,
  };

  let rank = [];
  useEffect(() => {
    const arr = [];
    if (props.rank[1] !== undefined) {
      rank = props.rank.map((v) => v[0]);

      for (let val in rank) {
        switch (rank[val]) {
          case "101950":
            arr.push("R");
            break;
          case "101951":
            arr.push("I");
            break;
          case "101952":
            arr.push("A");
            break;
          case "101953":
            arr.push("S");
            break;
          case "101954":
            arr.push("E");
            break;
          case "101955":
            arr.push("C");
            break;
        }
      }

      setTypes(arr.join(""));
    }
  });

  useEffect(() => {
    for (let key in type) {
      if (types === key) {
        setUserType(key);
        setWord(type[key]);
      }
    }
  }, [types]);

  return (
    <>
      <div className={styles.subTitle}>
        <h2 className={styles.Answer}>당신의 성향은?</h2>
        <div className={styles.line}></div>
      </div>
      <div>
        <div className={styles.mentContainer}>
          <h4 className={styles.typeName}>{userType} 형입니다</h4>
          <p className={styles.ment}>{word}</p>
        </div>
      </div>
    </>
  );
};

export default Ment;