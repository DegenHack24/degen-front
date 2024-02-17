export default function Dashboard() {
  const directory = {
    A: [
      {
        id: 1,
        name: "Abbott",
        email: "leslie.abbott@example.com",
        imageUrl:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        id: 2,
        name: "Adams",
        email: "hector.adams@example.com",
        imageUrl:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        id: 3,
        name: "Alexander",
        email: "blake.alexander@example.com",
        imageUrl:
          "https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        id: 4,
        name: "Andrews",
        email: "fabricio.andrews@example.com",
        imageUrl:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    ],
    B: [
      {
        id: 5,
        name: "Beaver",
        email: "angela.beaver@example.com",
        imageUrl:
          "https://images.unsplash.com/photo-1501031170107-cfd33f0cbdcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        id: 6,
        name: "Blanchard",
        email: "yvette.blanchard@example.com",
        imageUrl:
          "https://images.unsplash.com/photo-1506980595904-70325b7fdd90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        id: 7,
        name: "Brooks",
        email: "lawrence.brooks@example.com",
        imageUrl:
          "https://images.unsplash.com/photo-1513910367299-bce8d8a0ebf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    ],
    C: [
      {
        id: 8,
        name: "Clark",
        email: "jeffrey.clark@example.com",
        imageUrl:
          "https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        id: 9,
        name: "Cooper",
        email: "kathryn.cooper@example.com",
        imageUrl:
          "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    ],
    E: [
      {
        id: 10,
        name: "Edwards",
        email: "alicia.edwards@example.com",
        imageUrl:
          "https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        id: 11,
        name: "Emerson",
        email: "benjamin.emerson@example.com",
        imageUrl:
          "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        id: 12,
        name: "Jillian Erics",
        email: "jillian.erics@example.com",
        imageUrl:
          "https://images.unsplash.com/photo-1504703395950-b89145a5425b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        id: 13,
        name: "Evans",
        email: "chelsea.evans@example.com",
        imageUrl:
          "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    ],
    G: [
      {
        id: 14,
        name: "Michael Gillard",
        email: "micheal.gillard@example.com",
        imageUrl:
          "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        id: 15,
        name: "Dries Giuessepe",
        email: "dries.giuessepe@example.com",
        imageUrl:
          "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    ],
    M: [
      {
        id: 16,
        name: "Jenny Harrison",
        email: "jenny.harrison@example.com",
        imageUrl:
          "https://images.unsplash.com/photo-1507101105822-7472b28e22ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        id: 17,
        name: "Lindsay Hatley",
        email: "lindsay.hatley@example.com",
        imageUrl:
          "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        id: 18,
        name: "Anna Hill",
        email: "anna.hill@example.com",
        imageUrl:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    ],
    S: [
      {
        id: 19,
        name: "Courtney Samuels",
        email: "courtney.samuels@example.com",
        imageUrl:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        id: 20,
        name: "Tom Simpson",
        email: "tom.simpson@example.com",
        imageUrl:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    ],
    T: [
      {
        id: 21,
        name: "Floyd Thompson",
        email: "floyd.thompson@example.com",
        imageUrl:
          "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        id: 22,
        name: "Leonard Timmons",
        email: "leonard.timmons@example.com",
        imageUrl:
          "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        id: 23,
        name: "Whitney Trudeau",
        email: "whitney.trudeau@example.com",
        imageUrl:
          "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    ],
    W: [
      {
        id: 24,
        name: "Kristin Watson",
        email: "kristin.watson@example.com",
        imageUrl:
          "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        id: 25,
        name: "Emily Wilson",
        email: "emily.wilson@example.com",
        imageUrl:
          "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    ],
    Y: [
      {
        id: 26,
        name: "Emma Young",
        email: "emma.young@example.com",
        imageUrl:
          "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    ],
  };
  return (
    <div className="w-[600px] mx-auto mt-10 p-10 border-2 rounded-xl border-[#4545EF] shadow-lg">
      <div className="flex justify-between text-black text-xl p-4 pt-0">
        <h3>Name</h3>
        <h3>Price</h3>
        <h3>Quantity</h3>
        <h3>Total</h3>
      </div>
      <nav className="h-[600px] overflow-y-auto" aria-label="Directory">
        {Object.keys(directory).map((letter) => (
          <div key={letter} className="relative">
            <div className="sticky top-0 z-10 border-y border-b-gray-200 border-t-gray-100 bg-gray-50 px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900">
              <h3>{letter}</h3>
            </div>
            <ul role="list" className="divide-y divide-gray-100">
              {directory[letter].map((person) => (
                <li
                  key={person.email}
                  className="flex justify-between px-3 py-5"
                >
                  <div className="min-w-0">
                    <p className="text-sm font-semibold leading-6 text-gray-900">
                      {person.name}
                    </p>
                  </div>
                  <div>21,370</div>
                  <div>0,2137</div>
                  <div>2,1370</div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </div>
  );
}
