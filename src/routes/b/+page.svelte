<script>
	import { testStore } from '../testStore';

	let j = testStore('j', new Set());
	console.log({ j: $j });
</script>

<p>without lang="ts"</p>

<p>j is undefined? {$j === undefined}</p>
