back prop nudges words that **share context** _together_,<br/>nudges all words **outside** of the context _away_

![nudge vectors together or push apart](img/nudge.png)

note:
- increase the cosine similarity of words that appear together
- decrease the similarity of all other words
- tug of war effect
- this **nudging** is mediated by a learning rate
