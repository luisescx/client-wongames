import { QUERY_GAMES } from "graphql/queries/games";

export const gamesMock = {
  request: {
    query: QUERY_GAMES,
    variables: {
      pagination: { limit: 15 }
    }
  },
  result: {
    data: {
      games: {
        data: [
          {
            __typename: "GameEntity",
            attributes: {
              name: "witcher",
              slug: "pathfinder-wrath-of-the-righteous-mythic-edition",
              cover: {
                data: {
                  attributes: {
                    url: "/uploads/pathfinder_wrath_of_the_righteous_mythic_edition_39971b0ba4.jpg"
                  }
                }
              },
              developers: {
                data: [
                  {
                    attributes: {
                      name: "Owlcat Games"
                    }
                  }
                ]
              },
              price: 163.39
            }
          }
        ]
      }
    }
  }
};

export const fetchMoreMock = {
  request: {
    query: QUERY_GAMES,
    variables: { limit: 15, start: 1 }
  },
  result: {
    data: {
      games: {
        data: [
          {
            __typename: "GameEntity",
            attributes: {
              name: "fetch more games",
              slug: "pathfinder-wrath-of-the-righteous-mythic-edition",
              cover: {
                data: {
                  attributes: {
                    url: "/uploads/pathfinder_wrath_of_the_righteous_mythic_edition_39971b0ba4.jpg"
                  }
                }
              },
              developers: {
                data: [
                  {
                    attributes: {
                      name: "Owlcat Games"
                    }
                  }
                ]
              },
              price: 163.39
            }
          }
        ]
      }
    }
  }
};
