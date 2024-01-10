import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AnalyticsCard from "../../Helpers/AnalyticsCard";
import CandidatesChart from "../../Helpers/CandidatesChart";
export default function Analytics() {
  const [data, setData] = useState([]);
  const [votes, setVotes] = useState(0);

  const candidatesList = useSelector(
    (state) => state.candidates.candidatesList
  );
  const changeData = () => {
    const list = [];

    var voteCount = 0;
    for (var i = 0; i < candidatesList.length; i++) {
      list.push({
        name: candidatesList[i].name,
        votes: candidatesList[i].voteCount,
      });
      voteCount += Number(candidatesList[i].voteCount);
    }

    setData(list);
    setVotes(voteCount);
  };

  useEffect(() => {
    changeData();
  }, []);

  return (
    <div style={rootDiv}>
      <div style={cardDiv}>
        <AnalyticsCard
          number={candidatesList.length}
          name={"Candidates"}
          img={
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAD5klEQVR4nO2bTUwTQRTHf5RaYg8omGiVgvGijSSmIPEDtZJI/AielHhUE2MjJ73pARMjHPSmJz4SvavI1YunFvxIjCQkGvVitCTggZDoyYCsh20JLJ12P2ZnWtpfsgnZmdl5+/a9t/OfLVBlwxADxoA5YBZ4AezTapFCYsACYFiOBSrECWOA0dPVbsykh41Masg4l2jLOeF5oYE1Sszzn1/A9kxqiGhkGwCZ2XlaTvaBmRI7RQMDSszzn38u2zaMAyYBkv2jzMzNk5mdJ3l3JNc2oc8sdbRiPmlrEVwC9mu0SwlNwHvW33zueAfsEg0u9yJYB6SAQ+FwmLZ4B5GIWe/mfs0xPT3Fnz+/wXTQSeCv9QK1Co31g2vAjXA4zJnT52loaCQQqCUQqKW+fgu7d+/h54/vLC4tRoGfwEfrBcq9CF4FiMc7CIVC6xpDoRDx+ME1fa2UuwNiADsjwtc8kciuNX2tlHsNMBz2X3e/pRgBTkSNk3d82qNdSqiKGpyJmknE73/rkTcCSq0GOBU1nmtA0MagGDAIHM9OOAH0A18dTm4HV6Lm8YfCt3GzY0nYVqwIxoC3wEVgBxABejGXl37kpHJRUywFxoCLPV3tjAwkMQyDZP8or1JTYFbnS5LtaQWmWf9g/gEHgM+W8wY4igDHr8ETAMP3r9O0o5FoZBsjA8k1bRJpAp4KbKrNtglFjVuK1QDXGw0OqQPGKSxqDmf75BU1bikWAYVyclKWEcAVsjd/5vR5otEWgsFNBIObiDY1033qLOHNYYDDwGWJ8xatAaKcXMbMyU+S7HgDHO3sTNAcbcnbIZP5wZu36VzfY9nTvtaAQjkZAJ4gLyc9ixq3iCLA80aDQ9wuaHyLANU5qU3UiBzgeaPBIScwn46dIyFhvhVEDlCdk55FjVtENcCzyMCZhtBWA0QjJzANt0O+J5LTEFtXnesFuoEjCISUMdxQcKKaGws2TbKPKAW85uQgsLWnq52Z9DCZ1BDnEm1gOmRA6h14ROQArzmpUkN4QuSATgfXyJcqqjSEZwpWD+Nbd8HBNXtfi5omgd5k/yijg0kMA780hGfs7Ai54R5w4VVqKtCc6Ft9fhm479OcrvBjW1ylhvCM7AjQpuvdIjsCtOl6t8h2gGoN4RnZDtCm690iuwY0ALwcf2anb6PkuV0hOwLK7mOl7AgoqWWuHWRHgDZd7xbZDvCqIZTjy1L4S5HPhjFfvqu6oxR/IaKUqgN0G6CbqgN0G6CbqgN0G6CbqgN0G1AqOFnDb5QjDZZvbBVIzRot8PDBI12GKOX2nVsrf1d8Daj4FMhFQEX8b52FktiQ0c5/e3KlPVVH+kcAAAAASUVORK5CYII="
          }
          color={"#099AB9"}
        />
        <AnalyticsCard
          number={votes}
          name={"Voters"}
          img={
            "data:image/png;base64,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"
          }
          color={"#09B925"}
        />
      </div>
      <br />
      <br />
      <CandidatesChart data={data} />
    </div>
  );
}
const rootDiv = {
  display: "flex",
  flex: 1,
  justifyContent: "space-evenly",
  flexDirection: "column",
  alignItems: "center",
};
const cardDiv = {
  display: "flex",
  flex: 1,
  justifyContent: "space-evenly",
  width: "100%",
};
