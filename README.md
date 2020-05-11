# NgInboxWorkspace


## About the project
This is a project for reusable email inbox component. It contains 2 sub-projects:
- __Library `my-lib`__: Library providing Inbox component with configurable endpoints.
- __Application `app`__: Application to serve a testing page for Inbox component with configured endpoint.

#### Libary: my-lib - InboxComponent

##### @Input
- `apiEndpoint` An endpoint providing mail list

##### @Output
| Output                | When                  | Event data |
| --------------------- | --------------------- | ----------------------------------- |
| `mailClick`           | click mail            | { mail: Mail }                      |
| `mailSelectionChange` | change mail selection | { mail: Mail, isSelected: boolean } |
| `mailAction`          | click action button   | { mail: Mail, action: string }      |

Where `action` can be `delete`, `mail`, `flag`, `pin`.

##### Dynamic date-time format
- Format as `H:mm` when sending time is in current date.
- Format as `MMM d` when sending time is in different date in the same year.
- Format as `M/d/yy` when sending time is in different year.

##### Mail list filter
- Open filter panel by clicking `Filter` button
- Start filtering by ENTER term

### Application: app

##### API endpoint configuration
- Configured base api url with `baseApiUrl` in each environment.

##### Local mode with mock data
- Use mock data in `local` configuration.


## Run the project
- [Install dependencies](#install-dependencies)
- [Build library `my-lib`](#build-project)
- [Serve application](#serve-application)


## Install dependencies
Run command to install project dependencies:
```sh
$ npm install
```


## Build sub-projects
To build sub-project separately, use this command:
```sh
$ npm run build:${sub-project}
```
Where `${sub-project}` is the sub-project, i.e. `my-lib` or `app`.

Or run this command to build 2 sub-projects together:
```sh
$ npm run build
```


## Serve application
__After `my-lib` is successfully built__, you can serve the application using http request to configured endpoint in default environment:
```sh
$ npm start
```
To run application with local mock data, use this command:
```sh
$ npm run start-local
```


## Run unit-test
Run this following command:
```sh
$ npm test
```


## Assumption to API endpoint response
- Mail list response is in this following format:
`[
  {
    "id": 1,
    "from": {
      "name": "sender1 name",
      "email": "sender1@email.com"
    },
    "time": "2020-02-01T05:20:20.000Z",
    "subject": "subj 1",
    "body": "body 1"
  },
  {
    "id": 2,
    "from": {
      "name": "sender2 name",
      "email": "sender2@email.com"
    },
    "time": "2020-01-01T05:20:20.000Z",
    "subject": "subj 2",
    "body": "body 2"
  }
]`
- Mail list is already sorted by `time` from backend.
