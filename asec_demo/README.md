## Installation guide
Please dive into backend & frontend folders, you can see each applications' install process and launch commands.

## Memo:
Has spent 11 hours in this edition. 

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

## TODO
### Code
Currently, only fetch character & film data by SWAPI and connect through apollo.

#### Backend
- Complete rest 4 of categories APIs and their relation.
- Migrate schema.graphql into ts format.
- Adopt TypeORM.
- Do some unit test example.

#### Frontend
- Plck react-slide, it makes cards flash refresh, so terrible.
- Make graphql queries more succinct.
- Beautify User Interface. (low priority)

### Technical documentation
1. Document a diagrammatic elaboration on categories' attributes and their association.
2. Establish shorten vision with hiring manager, evaluate and breakdown action items through the plan. (need talk)

### QA/Test plan
imo, CI/CD is the primary quality control & quality assurance requiremet.  
However, it's too big to this quiz, may be I will adopt unit test in the very beginning.  
If the program goes bigger, I tend to apply GitOps on git platform such as Git Action to help build test environment.  
I might put DiD (docker in docker) asides in the first 1 years.
