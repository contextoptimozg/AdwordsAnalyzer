<template>
    <div class="container">
        <div class="content-container">
            <form action="" class="settings-form">
                <div class="settings-item">
                    <label for="zcpa">Желаемая цена за конверсию:</label>
                    <input type="text" id="zcpa" class="settings-form-item" required>
                </div>
                <div class="settings-item">
                    <label for="zconv">Желаемое количество конверсий за выбранный период:</label>
                    <input type="text" id="zconv" class="settings-form-item" required>
                </div>
                <div class="settings-item">
                    <label for="period">Период:</label>
                    <input type="text" id="period" class="settings-form-item" required>
                </div>
                <div class="settings-item">
                    <label for="analyze">Точность анализа:</label>
                    <input type="text" id="analyze" class="settings-form-item" required>
                </div>
                <div class="settings-item">
                    <label for="season">Сезонность:</label>
                    <input type="text" id="season" class="settings-form-item" required>
                </div>
                <div class="settings-item">
                    <label for="conv">Название конверсии в Adwords и в Google Analytics:</label>
                    <input type="text" id="conv" class="settings-form-item" required>
                </div>
                <input type="submit" class="settings-submit btn-submit" value="Отправить">
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Settings"
    }
</script>

<style scoped>

</style>