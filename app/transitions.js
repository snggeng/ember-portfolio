export default function () {
  this.transition(
    this.fromRoute('index'),
    this.toRoute('resume'),
    this.use('toLeft'),
    this.reverse('toRight')
  )
}
