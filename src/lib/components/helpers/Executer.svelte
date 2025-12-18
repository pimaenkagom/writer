<script lang="ts">
	function execute() {
		console.log('Execute button clicked');
	}
</script>

<section class="section">
	<div class="container">
		<button class="button" aria-label="Execute" onclick={execute}>
			<span class="icon is-small">
				<i class="fa-solid fa-terminal"></i>
			</span>
		</button>
	</div>
</section>
