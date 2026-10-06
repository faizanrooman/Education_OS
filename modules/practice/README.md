# practice

Common suite: **Practice & Performance**. The generic patterns that every field's specialized
needs reduce to ([institution-types.md](../../docs/architecture/institution-types.md)). Each module
takes its vocabulary from the academy profile, so the same module is "Audition" at a music
academy, "Casting" at a theatre school and "Squad selection" at a sports college.

Grouping folder only. Each sub-folder is an independent, portable module.

| Module | Pattern | Appears as |
|---|---|---|
| [portfolio](portfolio/) | Portfolio | Artworks, repertoire, collections, showreels, teaching and research portfolios |
| [projects](projects/) | Projects | Capstone, film, live business, research, artwork and design projects |
| [selection-process](selection-process/) | Selection | Auditions, casting, squad selection, jury rounds, moot court teams, supervisor allocation |
| [productions](productions/) | Productions and events | Performances, exhibitions, recitals, screenings, hackathons, case competitions, conferences |
| [field-training](field-training/) | Field training | Clinical rotations, teaching practice, farm rotations, internships, residency, court visits |
| [skill-progress](skill-progress/) | Skill progress | Technique grades, fitness metrics, practicum assessment, competency tracking |

Resource booking and specialized inventory are the other two patterns; they live in
`facilities/facility-booking` and `facilities/inventory-equipment`.
