import CandidatesList from '../Components/CandidatesList';
const Candidates = () => {
  const CANDIDATES = [
    {
      id: 'u1',
      name: 'Twagirayesu Pacifique',
      approve: true,
      image:
        'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
    {
      id: 'u2',
      name: 'Muneza Jack',
      approve: false,
      image:
        'https://www.eharmony.co.uk/dating-advice/wp-content/uploads/2011/04/profilephotos.jpg',
    },
  ];
  return (
    <div>
      <CandidatesList candidates={CANDIDATES} />
    </div>
  );
};

export default Candidates;
