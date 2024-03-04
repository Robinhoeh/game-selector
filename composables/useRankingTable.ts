export default function useRankingTable() {
  const pcgame1Id = ref(1);
  const pcgame2Id = ref(1);
	const consolegameId = ref(1);
	
const pcgames1 = useState("pcgames1", () => []);
const pcgames2 = useState("pcgames2", () => []);
	const consolegames = useState('consolegames', () => [])
	
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
	
	
  return {
    columns,
    pcgames1,
    pcgames2,
    consolegames,
    pcgame1Id,
    pcgame2Id,
    consolegameId,
  };
}
