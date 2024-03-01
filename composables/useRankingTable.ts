export default function useRankingTable() {
	const pcgame1Id = ref(1);
	const pcgame2Id = ref(1);
	const consolegameId = ref(1);
  const columns = [
    {
      key: "id",
      label: "#",
    },
    {
      key: "title",
      label: "Game title",
    },
    {
      key: "actions",
    },
  ];
  const pcgames1 = ref([])
	
  const pcgames2 = [
    {
      id: 1,
      title: "Front-end Developer",
    },
    {
      id: 2,
      title: "Designer",
    },
    {
      id: 3,
      title: "Director of Product",
    },
    {
      id: 4,
      title: "Copywriter",
    },
    {
      id: 5,
      title: "Senior Designer",
    },
    {
      id: 6,
      title: "Principal Designer",
    },
  ];
  const consolegames = [
    {
      id: 1,
      title: "Front-end Developer",
    },
    {
      id: 2,
      title: "Designer",
    },
    {
      id: 3,
      title: "Director of Product",
    },
    {
      id: 4,
      title: "Copywriter",
    },
    {
      id: 5,
      title: "Senior Designer",
    },
    {
      id: 6,
      title: "Principal Designer",
    },
  ];
	
	
	return {
		columns,
		pcgames1,
		pcgames2,
		consolegames,
		pcgame1Id,
		pcgame2Id,
		consolegameId
	}


}
