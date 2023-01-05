<script lang="ts">
	import { testStore } from '../testStore';

	let j = testStore('j', new Set());
	console.log({ j: $j });
</script>

<p>with lang="ts"</p>

<p>j is undefined? {$j === undefined}</p>
