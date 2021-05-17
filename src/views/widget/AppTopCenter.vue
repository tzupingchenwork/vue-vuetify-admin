<template>
	<v-container class="container--fluid">
		<v-row no-gutters dense justify="center" align="center">
			<v-col class="text-center">
				<slot name="page" />
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
export default {
	name: 'AppTopCenter',
	data: () => ({})
};
</script>
