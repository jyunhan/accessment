## Installation guide
Please dive into backend & frontend folders, you can see each applications' install process and launch commands.

## Time spent:
Total 13 hours in work. 

## Thinking Map
### Persistency Storage
Had adopted a persistency storage in very beginning, but pluck.

Reasons:
1. Quiz requirement emphasize "backend should act as middleware between the UI and the data sources **by
consuming the SWAPI**", in that case, the scenario might not allow detect in persistency storage.
2. Stand on interviewer, I 2 days fetch data from DB sounds no identification in the accessment, but only code readbility.

### Time spending loading
I've trid to use file cache right after pluck persistency storage, but i think it plunk it too, cuz' the file approch looks so dumb.  
Adaopt Redis Cluster is over kill, but has some reasonable explaination on me:

Reasons:
1. It' didn't break the quiz requirement away and looks not so dumb. (compare with file generate)
2. Can demonstration a bit of operation tricks.
3. When the cache expired, the UI request still pass to WSAPI website, still meet quiz requirement.

### need Redux??
This quiz no need to handle status' side effect, and the objective can achieve by raect hook(s).
Keep it simple, so no apply yet.

## TODO
### Code
Currently, only fetch character & film data by SWAPI and connect through apollo.

#### Backend
[-] Complete rest 4 of categories APIs and their relation.  
[-] Migrate schema.graphql into ts format and adopt TypeORM.  

#### Frontend
[-] Display more user details in card.  
[-] Beautify User Interface. (low priority)  

### Technical documentation
1. Document a diagrammatic elaboration on categories' attributes and their association.
2. Establish shorten vision with hiring manager, evaluate and breakdown action items through the plan. (need talk)

### QA/Test plan
There has a basic test sample in the program, in backend folder.  
We can set coverage for team start from a loose thrshold to ask for code review.  
The rate number will get higher, new rate comes from evaluation with team discussion and rolling performance.

Frontend can do test for actions, but there are all external APIs fetching atm, I suspend it.
Some team will adopt E2E test, imo, it's too expense unless we have enough sources of SDET group.

Additionally, CI/CD is the primary quality control & quality assurance requiremet.  
If the program goes bigger, we can apply GitOps (such as Git Action) to help build test environment in the beginning.  
Then consider DiD (docker in docker) when the program ready to have product env.
