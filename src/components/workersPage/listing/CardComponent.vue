<template>
  <div class="card">
    <div class="card__header">
      <span class="card__name">{{item.fullName}}</span>
      <AppChip class="card-chip" color="#84909B">ИНН {{item.inn}}</AppChip>
      <AppChip class="card-chip"  color="#00AE5B" variant="elevated">{{item.typeContract.title}}</AppChip>
      <span class="card__job">{{item.position.title}}</span>
    </div>

    <div class="card__info">
      <div class="card-param">
        <AppIcon
          :src="item.country.icon"
          width="20px"
          height="14px"
          class="card-param__country"
        />
        <span class="card-param__text">{{item.country.slug}} {{item.number}}</span>
      </div>
      <div class="card-param">
        <span class="card-param__text">{{item.address}}</span>
      </div>
      <div class="card-param">
        <span class="card-param__text"
          v-if="item.dateBirth"
        >Дата рождения: {{item.dateBirth}}</span>
      </div>
      <div class="card-param">
        <span class="card-param__text"
          v-if="item.age"
        >Возраст: {{ age(item.age) }}</span>
      </div>
      <div class="card-param">
        <span class="card-param__text">Пол: {{item.gender.title}}</span>
      </div>
    </div>

    <div class="card__tag">
      <AppChip :color="item.status.tag.color" variant="elevated">{{ item.status.description }}</AppChip>
    </div>
  </div>
</template>
<script>
import {age} from '@/utils/age';
export default {
  name:'CardComponent',
  props:{
    item:{
      type:Object,
      default: () => {}
    }
  },
  setup() {
    return {
      age
    }
  },
}
</script>
<style scoped>
.card {
  padding: 25px;
  background: #E7F3FF;
  border-radius: 4px;
}
.card__header {
  display: flex;
  align-items: center;
}
.card__name {
  font-weight: 600;
  font-size: 18px;
  line-height: 120%;
  color: #2A358C;
}
.card-chip {
  margin-left: 20px;
}
.card__job {
  color: #041423;
  margin-left: 10px;
  font-weight: 400;
  font-size: 14px;
  line-height: 120%;
}
.card__info {
  display: flex;
  margin-top: 15px;
}
.card-param {
  display: flex;
  align-items: center;
}
.card-param:not(:first-child){
  padding-left: 15px;
  margin-left: 15px;
  border-left: 1px solid #CEDAE6;
}
.card-param__country {
  margin-right: 10px;
}
.card-param__text {
  line-height: 130%;
  color: #84909B;
  font-weight: 400;
  font-size: 14px;
}
.card__tag {
  margin-top: 15px;
}
</style>
