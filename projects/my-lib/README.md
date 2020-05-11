# MyLib

Library providing Inbox component with configurable endpoints.

## InboxComponent

### @Input
- `apiEndpoint` An endpoint providing mail list

### @Output
| Output                | When                  | Event data |
| --------------------- | --------------------- | ----------------------------------- |
| `mailClick`           | click mail            | { mail: Mail }                      |
| `mailSelectionChange` | change mail selection | { mail: Mail, isSelected: boolean } |
| `mailAction`          | click action button   | { mail: Mail, action: string }      |

Where `action` can be `delete`, `mail`, `flag`, `pin`.

### Dynamic date-time format
- Format as `H:mm` when sending time is in current date.
- Format as `MMM d` when sending time is in different date in the same year.
- Format as `M/d/yy` when sending time is in different year.

### Mail list filter
- Open filter panel by clicking `Filter` button
- Start filtering by ENTER term


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
