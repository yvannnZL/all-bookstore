# Generated by Django 5.0.3 on 2024-04-10 06:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0014_remove_book_slug'),
    ]

    operations = [
        migrations.AddField(
            model_name='book',
            name='tags',
            field=models.TextField(null=True),
        ),
        migrations.AlterField(
            model_name='book',
            name='description',
            field=models.TextField(null=True),
        ),
        migrations.AlterField(
            model_name='book',
            name='price',
            field=models.DecimalField(decimal_places=2, max_digits=10),
        ),
        migrations.AlterField(
            model_name='book',
            name='publish_date',
            field=models.DateField(null=True),
        ),
    ]